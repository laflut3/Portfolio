let NavBar = ' <nav id="nav-primaire">\n' +
    '        <div class="menu-item">\n' +
    '            <a href="Accueil.html">Accueil</a>\n' +
    '            <div class="sousmenu">\n' +
    '                <ul>\n' +
    '                    <li>\n' +
    '                        <a href="Accueil.html#Introduction">Introduction</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="Accueil.html#biographie">Biographie</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="menu-item">\n' +
    '            <a href="Projet.html">Mes Projets</a>\n' +
    '            <div class="sousmenu">\n' +
    '                <div class="but">\n' +
    '                    <ul>\n' +
    '\n' +
    '                        <li>\n' +
    '                            <a href="Projet.html#BUT">Universitaire</a>\n' +
    '                        </li>\n' +
    '\n' +
    '                        <ul class="sousmenu2">\n' +
    '                            <li>\n' +
    '                                <a href="semestre1.html">Semestre 1</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="semestre2.html">Semestre 2</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="semestre3et4.html">Semestre 3 et 4</a>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '                <ul>\n' +
    '                    <li>\n' +
    '                        <a href="Projet.html#personnel">Personnel</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="menu-item">\n' +
    '            <a href="CV.html">Mon CV</a>\n' +
    '        </div>\n' +
    '        <div class="menu-item">\n' +
    '            <a href="Contact.html">Contact</a>\n' +
    '        </div>\n' +
    '    </nav>';

    let navBurger = '    <nav id="navBurger">\n' +
        '        <div id="burger-menu">\n' +
        '            <span></span>\n' +
        '        </div>\n' +
        '        <div id="menu2">\n' +
        '            <div class="menu-item">\n' +
        '                <div class="boiteDepliante">\n' +
        '                    <details>\n' +
        '                        <summary>Accueil</summary>\n' +
        '                        <div class="content">\n' +
        '                            <ul>\n' +
        '                                <li>\n' +
        '                                    <a href="Accueil.html#Introduction">Introduction</a>\n' +
        '                                </li>\n' +
        '                                <li>\n' +
        '                                    <a href="Accueil.html#biographie">Biographie</a>\n' +
        '                                </li>\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                    </details>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="menu-item">\n' +
        '                <div class="boiteDepliante">\n' +
        '                    <details>\n' +
        '                        <summary>Projet</summary>\n' +
        '                        <div class="content">\n' +
        '                            <div class="but">\n' +
        '                                <ul>\n' +
        '                                    <li>\n' +
        '                                        <a href="Projet.html">Introduction</a>\n' +
        '                                    </li>\n' +
        '                                    <li>\n' +
        '                                        <a href="Projet.html#BUT">Universitaire</a>\n' +
        '                                    </li>\n' +
        '\n' +
        '                                    <li>\n' +
        '                                        <div class="boiteDepliante">\n' +
        '                                            <details>\n' +
        '                                                <summary>projet Universitaire</summary>\n' +
        '                                                <div class="content">\n' +
        '                                                    <ul>\n' +
        '                                                        <li>\n' +
        '                                                            <a href="semestre1.html">Semestre 1</a>\n' +
        '                                                        </li>\n' +
        '                                                        <li>\n' +
        '                                                            <a href="semestre2.html">Semestre 2</a>\n' +
        '                                                        </li>\n' +
        '                                                        <li>\n' +
        '                                                            <a href="semestre3et4.html">Semestre 3 et 4</a>\n' +
        '                                                        </li>\n' +
        '                                                    </ul>\n' +
        '                                                </div>\n' +
        '                                            </details>\n' +
        '                                        </div>\n' +
        '                                    </li>\n' +
        '                                </ul>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <ul>\n' +
        '                            <li>\n' +
        '                                <a href="Projet.html#personnel">Personnel</a>\n' +
        '                            </li>\n' +
        '                        </ul>\n' +
        '                    </details>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="menu-item">\n' +
        '                <div class="boiteDepliante">\n' +
        '                    <details>\n' +
        '                        <summary>CV</summary>\n' +
        '                        <div class="content">\n' +
        '                            <a href="CV.html">Mon CV</a>\n' +
        '                        </div>\n' +
        '                    </details>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="menu-item">\n' +
        '                <div class="boiteDepliante">\n' +
        '                    <details>\n' +
        '                        <summary>Contact</summary>\n' +
        '                        <div class="content">\n' +
        '                            <a href="Contact.html">Contact</a>\n' +
        '                        </div>\n' +
        '                    </details>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </nav>';

const header = document.getElementById('header');
header.innerHTML += (NavBar);
header.innerHTML += (navBurger);
