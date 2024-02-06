function addPlayer(a, b, c, d) {
    var player = document.getElementById(a);
    var sPlayer = player.cloneNode(true);
    var icon = document.getElementById(b);
    var allCounting = document.getElementById('allCounting');
    var selectedPlayerCounting = document.getElementById('selectedPlayerCounting');

    if (icon.classList.contains('fa-plus') == true) {
        document.getElementById("selectedPlayer").appendChild(sPlayer);
        document.getElementById(a).remove();
        var icons = document.getElementById(b);
        icons.classList.remove('fa-plus');
        icons.classList.add('fa-minus');
        icons.classList.add('text-danger');
        let border = document.getElementById(c);
        border.classList.add('border-danger');
        var cal = allCounting.innerHTML - 1;
        allCounting.innerHTML = cal;
        var add = parseInt(selectedPlayerCounting.innerHTML) + 1;
        selectedPlayerCounting.innerHTML = add;

    } else if (icon.classList.contains('fa-minus') == true) {
        document.getElementById("unselected-player").prepend(player);
        var icons = document.getElementById(b);
        icons.classList.add('fa-plus');
        icons.classList.remove('fa-minus');
        icons.classList.remove('text-danger');
        border = document.getElementById(c);
        border.classList.remove('border-danger');
        var removeCal = selectedPlayerCounting.innerHTML - 1;
        selectedPlayerCounting.innerHTML = removeCal;
        var sub = parseInt(allCounting.innerHTML) + 1;
        allCounting.innerHTML = sub;
    }
}