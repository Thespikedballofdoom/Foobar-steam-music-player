//needs to be loaded with javascript in SFP
function Musicsupersize() {
	if (window.name.includes("OverlayBrowser_Discussions")) {
		console.log("we detected overlaybrowser_discussions, changing window size...");
		SteamClient.Window.SetMinSize(100,100);
		SteamClient.Window.ResizeTo(500,1080,1);
		//Remove the majority of window pane
			var style = document.createElement('style'),
	script = document.getElementsByTagName('script')[0],
		styles = '[class*="desktopbrowser_URLBar_"]{margin-top: -34px;border:2px solid #141920} .title-area-children{	display:none!important}.title-area {height:0}[class*="steamdesktopoverlay_OverlayPopup"][class*="steamdesktopoverlay_Resizable"]{height:100% !important}';
	script.parentNode.insertBefore(style, script);
	try{style.innerHTML = styles;}
	//IE fix
	catch(error){style.styleSheet.cssText = styles;}
	}
}
Musicsupersize();
