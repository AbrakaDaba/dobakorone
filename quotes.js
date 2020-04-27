
$(document).ready(randomQuote)
function randomQuote(){
        var quotesCyr = {
            "quote1":"Учините само један мали корак, зарад, не само себе, својих ближњих, оних које волите, већ зарад постојања и опстанка ове планете на којој живимо.",
            "author1":"Светозар Цветковић",
            "author-title1":"глумац",

            "quote2":"Једна идеја, један циљ, један дух - то је услов за тријумф, и у спорту и у животу. Србија то од нас данас тражи више него икада и ми смо јој то дужни!",
            "author2":"Слободан Ковач",
            "author-title2":"олимпијски шампион",

            "quote3":"Сад није време за инаћење, а и народна мудрост каже: Инат није добар занат. Послушајте савет који вам дају, останите код куће…да бисте кад ово прође, могли поново лепо да се инатите.",
            "author3":"Бода Нинковић",
            "author-title3":"глумац",

            "quote4":"Многи људи су напољу због нас, ред је да ми због њих останемо овде (код куће).",
            "author4":"Аница Добра",
            "author-title4":"глумица",

            "quote5":"Када свет пропада, најбоље искористите оно што још увек јесте око вас.",
            "author5":"Стинг",
            "author-title5":"музичар",

            "quote6":" И ово ће проћи.",
            "author6":"Стара Персијска",
            "author-title6":"изрека",

            "quote7":" Све ће бити у реду на крају. Ако није у реду - није крај.",
            "author7":"Џон Ленон",
            "author-title7":"музичар",

            "quote8":"Ничега се у животу не треба плашити, потребно је само разумети. Време је да разумемо више, како бисмо се мање плашили.",
            "author8":"Марија Кири",
            "author-title8":" физичарка и хемичарка",

            "quote9":"Крајња мера човека није у његовим тренуцима комфора, већ у време изазова и контроверзе.",
            "author9":"Мартин Лутер Кинг",
            "author-title9":"борац за људска права",

            "quote10":"Прилике да пронађемо дубље моћи у себи долазе када нам се живот чини најизазовнијим.",
            "author10":"Џозеф Кембел",
            "author-title10":"писац",

            "quote11":"Опасности вребају на нашем путу. Ми не можемо приуштити - немамо право - да се осврћемо у назад. Морамо гледати напред!",
            "author11":"Винстон Черчил",
            "author-title11":"политичар",

            "quote12":"Не преживљава врста која је најјача, нити која је најинтелигентнија, већ она која најбоље реагује на промене.",
            "author12":"Чарлс Дарвин",
            "author-title12":"научник",

            "quote13":"Живот није у чекању олује да прође, већ у учењу како плесати на киши.",
            "author13":"Вивијан Грин",
            "author-title13":"",

        }

        var quotesLat = {
        "quote1":"Učinite samo jedan mali korak, zarad, ne samo sebe, svojih bližnjih i onih koje volite, već zarad postojanja i opstanka ove planete na kojoj živimo.",
        "author1":"Svetozar Cvetković, glumac",

        "quote2":"Jedna ideja, jedan cilj, jedan duh - to je uslov za trijumf, i u sportu i u životu. Srbija to od nas danas traži više nego ikada i mi smo joj to dužni!",
        "author2":"Slobodan Kovač, Olimpijski šampion i najbolji odbojkaški trener Evrope ",

        "quote3":"Sad nije vreme za inaćenje, a i narodna mudrost kaže: Inat nije dobar zanat. Poslušajte savet koji vam daju, ostanite kod kuće…da biste kad ovo prođe, mogli ponovo lepo da se inatite.",
        "author3":"Boda Ninković, glumac",

        "quote4":"Mnogi ljudi su napolju zbog nas, red je da mi zbog njih ostanemo ovde (kod kuće).",
        "author4":"Anica Dobra, glumica",

        "quote5":"Kada svet propada, najbolje iskoristite ono što još uvek jeste oko vas.",
        "author5":"Sting, muzičar",

        "quote6":" I ovo će proći.",
        "author6":"stara persijska izreka",

        "quote7":" Sve će biti u redu na kraju. Ako nije u redu - nije kraj.",
        "author7":"Džon Lenon, rok muzičar",

        "quote8":"Ničega se u životu ne treba plašiti, potrebno je samo razumeti. Vreme je da razumemo više, kako bismo se manje plašili.",
        "author8":"Marija Kiri, fizičarka i hemičarka, dvostruka dobitnica Nobelove nagrade",

        "quote9":"Krajnja mera čoveka nije u njegovim trenucima komfora, već u vreme izazova i kontroverze.",
        "author9":"Martin Luter King, borac za ljudska prava",

        "quote10":"Prilike da pronađemo dublje moći u sebi dolaze kada nam se život čini najizazovnijim.",
        "author10":" Džozef Kembel, pisac",

        "quote11":"Opasnosti vrebaju na našem putu. Mi ne možemo priuštiti - nemamo pravo - da se osvrćemo u nazad. Moramo gledati napred!",
        "author11":" Vinston Čerčil, političar, dobitnik Nobelove nagrade za književnost",

        "quote12":"Ne preživljava vrsta koja je najjača, niti koja je najinteligentnija, već ona koja najbolje reaguje na promene.",
        "author12":"Čarls Darvin, britanski naučnik i otac teorije evolucije",

        "quote13":"Život nije u čekanju oluje da prođe, već u učenju kako plesati na kiši.",
        "author13":"Vivijan Grin, supruga književnika Grejema Grina",

        }
    var randomNum = Math.ceil(Math.random() * 13);
    var quote = "quote" + randomNum;
    var author = "author" + randomNum;
    var title = "author-title" + randomNum;

    $(".quote__content").text('"'+ quotesCyr[quote]+'"');
    $(".quote__author__name").text(quotesCyr[author]);
    $(".quote__author__title").text(quotesCyr[title]);
}