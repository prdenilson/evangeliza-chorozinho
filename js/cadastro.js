const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbzV3vpTYEABFh231Pu3SK0xcDJyza8e-XAc9lpj4zPamRZvkE0thR2nUHFhBOVGamgu/exec";


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
