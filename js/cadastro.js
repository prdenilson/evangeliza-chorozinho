const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbz9qE7IGgxpPYHMmHy023xSklr9ZL0_I2CNP0N8A07zxA8DnAG1SBh_TQOCAhmUmHul_g/exec";

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

            numero: "",

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

            await fetch(
                URL_GOOGLE_SHEETS,
                {
                    method: "POST",

                    mode: "no-cors",

                    headers: {
                        "Content-Type":
                            "text/plain;charset=utf-8"
                    },

                    body: JSON.stringify(participante)
                }
            );


            localStorage.setItem(
                "participante",
                JSON.stringify(participante)
            );


            window.location.href =
                "sucesso.html";


        } catch (erro) {

            console.error(
                "Erro no cadastro:",
                erro
            );


            alert(
                "Não foi possível concluir o cadastro.\n\n" +
                "Tente novamente."
            );


            botao.disabled = false;

            botao.textContent =
                "FINALIZAR CADASTRO";
        }

    });
