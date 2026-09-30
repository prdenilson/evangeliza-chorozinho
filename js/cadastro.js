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


        /*
         * NÚMERO TEMPORÁRIO DE INSCRIÇÃO
         */

        participante.numero =
            "EC-" +
            Date.now()
                .toString()
                .slice(-6);


        /*
         * DATA DO CADASTRO
         */

        participante.dataCadastro =
            new Date().toLocaleString("pt-BR");


        /*
         * ARMAZENAMENTO TEMPORÁRIO
         *
         * Depois vamos substituir esta parte
         * pelo envio para o Google Sheets.
         */

        localStorage.setItem(
            "participante",
            JSON.stringify(participante)
        );


        /*
         * REDIRECIONA PARA A CONFIRMAÇÃO
         */

        window.location.href = "sucesso.html";

    });
