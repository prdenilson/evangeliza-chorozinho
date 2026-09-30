const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbxaMBegcyJw7cyiyctCcU9T_zRK1gFpeq2yWSQ4NUQkmllkkwVQr4zrxEZaSibc1lUa/exec";


document
    .getElementById("formCadastro")
    .addEventListener("submit", async function (event) {

        event.preventDefault();

        const participante = {

            nome: document
                .getElementById("nome")
                .value
                .trim(),

            whatsapp: document
                .getElementById("whatsapp")
                .value
                .trim(),

            cidade: document
                .getElementById("cidade")
                .value
                .trim(),

            bairro: document
                .getElementById("bairro")
                .value
                .trim(),

            denominacao: document
                .getElementById("denominacao")
                .value
                .trim(),

            igreja: document
                .getElementById("igreja")
                .value
                .trim(),

            lider: document
                .getElementById("lider")
                .value
                .trim(),

            cargo: document
                .getElementById("cargo")
                .value,

            area: document
                .getElementById("area")
                .value,

            observacao: document
                .getElementById("observacao")
                .value
                .trim()

        };


        const botao =
            document.querySelector(
                "#formCadastro button[type='submit']"
            );


        botao.disabled = true;

        botao.textContent =
            "ENVIANDO CADASTRO...";


        try {

            const resposta =
                await fetch(
                    URL_GOOGLE_SHEETS,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body:
                            JSON.stringify(participante)
                    }
                );


            const resultado =
                await resposta.json();


            if (!resultado.sucesso) {

                throw new Error(
                    resultado.erro ||
                    "Não foi possível realizar o cadastro."
                );

            }


            /*
             * Guarda o número recebido
             * pelo Google Sheets.
             */

            localStorage.setItem(
                "numeroInscricao",
                resultado.numero
            );


            /*
             * Guarda também os dados
             * do participante.
             */

            localStorage.setItem(
                "participante",
                JSON.stringify({
                    ...participante,
                    numero: resultado.numero
                })
            );


            /*
             * Vai para a confirmação.
             */

            window.location.href =
                "sucesso.html";


        } catch (erro) {

            console.error(erro);

            alert(
                "Não foi possível concluir o cadastro. " +
                "Verifique sua conexão e tente novamente."
            );


            botao.disabled = false;

            botao.textContent =
                "FINALIZAR CADASTRO";

        }

    });
