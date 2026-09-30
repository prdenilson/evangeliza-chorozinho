const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbxaMBegcyJw7cyiyctCcU9T_zRK1gFpeq2yWSQ4NUQkmllkkwVQr4zrxEZaSibc1lUa/exec";


document
    .getElementById("formCadastro")
    .addEventListener("submit", function (event) {

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


        /*
         * Envia os dados para o Google Apps Script.
         * Usamos no-cors para evitar o bloqueio do navegador.
         */

        fetch(
            URL_GOOGLE_SHEETS,
            {
                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body:
                    JSON.stringify(participante)
            }
        )
        .then(function () {

            /*
             * O navegador não consegue ler a resposta
             * quando usamos no-cors.
             *
             * Mas o Google Apps Script recebe o cadastro.
             */

            localStorage.setItem(
                "participante",
                JSON.stringify(participante)
            );


            window.location.href =
                "sucesso.html";

        })
        .catch(function (erro) {

            console.error(erro);

            alert(
                "Não foi possível concluir o cadastro. " +
                "Verifique sua conexão e tente novamente."
            );

            botao.disabled = false;

            botao.textContent =
                "FINALIZAR CADASTRO";

        });

    });
