/// <reference path='./scripts/jquery-2.0.0-vsdoc.js' />

function getSQURL(ticker, source) {
    var localticker = ticker.toString().toUpperCase();
    if (localticker !== "") {
        switch (source) {
            case "RT":                
                return "https://www.cnbc.com/quotes/?symbol=" + localticker;
            case "ES":
                return "https://www.etfscreen.com/risk-return-chart.php?cSyms=AOR+AOA+AOK+AOM+BND+BNDX+BSV+DBC+DIA+EMLC+IAU+IWC+IWM+MDY+MUB+PGX+RWX+SDOG+SHM+SLV+SPY+USO+VEA+VEU+VIG+VNQ+VT+VTI+VWO+VYM+XLB+XLE+XLF+XLI+XLK+XLP+XLU+XLV+XLY+&s=" + localticker;
            case "DT":
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p06749700604";
            case "OP":
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p91690559751";
            case "EL":
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p97376413214";
            case "ST":
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p71327581855";
            case "PT":
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p22761169359";
            case "SC":
                return "https://www.stockconsultant.com/consultnow/basicplus.cgi?symbol=" + localticker;
            case "FV":
                return "https://finviz.com/quote.ashx?t=" + localticker;
            default:
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p71017663931";
        }
    }
    return "";
}

function setFrameSrc(enteredticker, tickersrc) {
    var URL = getSQURL(enteredticker, tickersrc);
    if (URL !== "") { 
        $('#center').html('<object id="frame" class="frame" type="text/html" data="' + URL + '"></object>');        
    }
}

function loadticker(ticker, tickersrc) {
    if (ticker !== "") {
        $('#tickertext').val(ticker.toString().toUpperCase());
        setFrameSrc(ticker, tickersrc);
    }
}

$(function () {
    $('#SelectQuoteSrc').on('change', function(){
        setFrameSrc($('#tickertext').val(), $('#SelectQuoteSrc').val())
    });

    $('#go').on('click', function () {
        setFrameSrc($('#tickertext').val(), $('#SelectQuoteSrc').val())
    });

    $('#etflist a').on('click', function(event){
        loadticker($(this).text(), $('#SelectQuoteSrc').val());
        return false; 
    });

    $('#tickertext').keypress(function(event) {
        if (event.which == 13 ) {
            setFrameSrc($('#tickertext').val(), $('#SelectQuoteSrc').val());
        }
    });

    $('#links a').on('click', function(){
        if ($(this).attr('href') != "") { 
            $('#center').html('<object id="frame" class="frame" type="text/html" data="' + $(this).attr('href') + '"></object>');
        }
    });
})
