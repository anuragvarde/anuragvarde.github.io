/// <reference path='../scripts/jquery-2.0.0-vsdoc.js' />

    function getSQURL(ticker, source) {
        var localticker = ticker.toString().toUpperCase()
        //alert(localticker)
        if (localticker != "")
            switch (source) {
            case "RT":                
                return "https://www.cnbc.com/quotes/?symbol=" + localticker;
            case "ES":
                //return "https://www.etfscreen.com/risk-return-chart.php?s=" + localticker;
                return "https://www.etfscreen.com/risk-return-chart.php?cSyms=AOR+AOA+AOK+AOM+BND+BNDX+BSV+DBC+DIA+EMLC+IAU+IWC+IWM+MDY+MUB+PGX+RWX+SDOG+SHM+SLV+SPY+USO+VEA+VEU+VIG+VNQ+VT+VTI+VWO+VYM+XLB+XLE+XLF+XLI+XLK+XLP+XLU+XLV+XLY+&s=" + localticker;
            case "DT":
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p06749700604";
            case "OP":
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p39782870368";
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
                return "https://stockcharts.com/h-sc/ui?s=" + localticker + "&p=D&yr=0&mn=6&dy=0&id=p71017663931"
        }
        else {
            //alert("No Ticker")
            return ""
        }
    };

    function setFrameSrc(enteredticker, tickersrc) {
        //alert(enteredticker + " " + tickersrc)
        var URL = getSQURL(enteredticker, tickersrc);
        //alert(URL)
        if (URL != "") { 
            $('#frame').attr('src',URL);          
        }

    };

    function loadticker(ticker, tickersrc) {
        if (ticker != "") {
            tickertext.value = ticker.toString().toUpperCase();
            setFrameSrc(ticker, tickersrc);
        }
    };

    $(function () {
        //$('#footer').html("DOM ready");
        $('#SelectQuoteSrc').on('change', function(){
            setFrameSrc($('#tickertext').val(), $('#SelectQuoteSrc').val())
          });

        $('#go').on('click', function () {
            setFrameSrc($('#tickertext').val(), $('#SelectQuoteSrc').val())
        });

        $('#etflist a').on('click', function(){
            loadticker($(this).text(), $('#SelectQuoteSrc').val());
        });
    })