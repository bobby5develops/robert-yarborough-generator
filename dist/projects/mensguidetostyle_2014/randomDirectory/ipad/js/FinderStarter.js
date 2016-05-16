try {
    console.log("console exists");
}
catch (e) {
    window.console = {};
    window.console.log = function (txt) {

    }
    window.console.warn = function (txt) {

    }
    window.console.error = function (txt) {

    }
}

000
var finder;
jQuery(document.body).ready(function () {

    finder = new MenGuideStyleFinder();
    finder.setTemplates(MenGuideStyleHTMLPages);

    var data = finder.getTemplate("structure");
    jQuery("#finderContainer").html(data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
///test

    /* ADD PAGES START */
finder.addPage(new Dressing101Page());
finder.addPage(new FitjeansPage());
finder.addPage(new Fitknots2Page());
finder.addPage(new Fitknots3Page());
finder.addPage(new Fitknots4Page());
finder.addPage(new FitknotsPage());
finder.addPage(new FitshirtPage());
finder.addPage(new FitshirtclassicPage());
finder.addPage(new FitshirtextraslimPage());
finder.addPage(new FitshirtfittedPage());
finder.addPage(new FitshirtslimPage());
finder.addPage(new FitsizePage());
finder.addPage(new FitsuitPage());
finder.addPage(new FitsuitclassicPage());
finder.addPage(new FitsuitextraslimPage());
finder.addPage(new FitsuitslimPage());
finder.addPage(new FitsuittrimPage());
finder.addPage(new HomePage());
finder.addPage(new HotListPage());
finder.addPage(new HowtowearitPage());
finder.addPage(new HtwhotspotPage());
finder.addPage(new HtwproductsPage());
finder.addPage(new ShirtTieMixerPage());
finder.addPage(new SuitQuizPage());
finder.addPage(new SuitQuizPoolPage());
finder.addPage(new SuitsLauren());
finder.addPage(new SuitsMK());
finder.addPage(new WearcasualshirtPage());
finder.addPage(new WearcasualshirtlpPage());
finder.addPage(new WeargearPage());
finder.addPage(new WearjacketPage());
finder.addPage(new WearjacketlpPage());
finder.addPage(new WearpantsPage());
finder.addPage(new WearpolosPage());
finder.addPage(new WearpoloslpPage());
finder.addPage(new WearshoesPage());
finder.addPage(new WearshoeslpPage());
finder.addPage(new WearsuitPage());
finder.addPage(new WearsuitlpPage());
finder.addPage(new WearsweaterPage());
finder.addPage(new WearsweaterlpPage());
/* ADD PAGES END */


    finder.setup();

});