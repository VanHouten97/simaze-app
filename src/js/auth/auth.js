(function() {
    function login() {
        var cpf = $('#inputCPF').val() || "";
        var  password = $('#inputPassword').val() || "";

        if (cpf.length === 0 || password.length === 0) {
            return toastr.warning('CPF ou Senha vazios.');
        }
    }

    $('#loginBtn').click(login);

})();
