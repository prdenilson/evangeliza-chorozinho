const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbxaMBegcyJw7cyiyctCcU9T_zRK1gFpeq2yWSQ4NUQkmllkkwVQr4zrxEZaSibc1lUa/exec";


document
    .getElementById("formCadastro")
    .addEventListener("submit", async function (event) {

        event.preventDefault();

        const botao =
            document.querySelector(
                "#formCadastro button[type='submit']"
            );

        botao.disabled = true;
        botao.textContent = "ENVIANDO CADASTRO...";


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


        try {

            const resposta = await fetch(
                URL_GOOGLE_SHEETS,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "text/plain;charset=utf-8"
                    },

                    body: JSON.stringify(participante)
                }
            );


            if (!resposta.ok) {
                throw new Error(
                    "O servidor não respondeu corretamente."
                );
            }


            const resultado =
                await resposta.text();


            console.log(
                "Resposta do Google:",
                resultado
            );


            if (
                resultado.includes("OK:")
            ) {

                localStorage.setItem(
                    "participante",
                    JSON.stringify(participante)
                );


                window.location.href =
                    "sucesso.html";

            } else {

                throw new Error(
                    resultado ||
                    "O cadastro não foi confirmado."
                );

            }


        } catch (erro) {

            console.error(
                "Erro no cadastro:",
                erro
            );


            alert(
                "Não foi possível concluir o cadastro.\n\n" +
                "O sistema não confirmou a gravação dos seus dados. " +
                "Tente novamente."
            );


            botao.disabled = false;

            botao.textContent =
                "FINALIZAR CADASTRO";
        }

    });
