var uruntipi,urunsecimi,uruntaksit,urunadet;
var aratop,odenecektutar,kargotutari=7;
var i;
var liste,secenek;
var erkek=["axe","100","bangillo","200","damt's","300"];
var kadin=["avon","50","grattis","150","yesil","85","marka","100","burbery","200"];
function ürünadedi(){
for(i=0;i<=10;i++){
	secenek=document.createElement("option");
			liste=document.getElementById("adet");
			liste.options.add(secenek);
			secenek.text=i;
			secenek.value=i;
}
	
}
function ürüntaksidi(){
for(i=0;i<=12;i=i+3){
	secenek=document.createElement("option");
			liste=document.getElementById("taksit");
			liste.options.add(secenek);
			secenek.text=i;
			secenek.value=i;
}
	
}
function urunlerigetir(){
	document.querySelectorAll('#seç option').forEach(option=>option.remove());
	for(i=0;i<document.getElementsByName("ürüntipi").length;i++){
		if(document.getElementsByName("ürüntipi")[i].checked){
		uruntipi=document.getElementsByName("ürüntipi")[i].value;}
}

	
	if(uruntipi=="E"){
		for(i=0;i<erkek.length;i=i+2){
			secenek=document.createElement("option");
			liste=document.getElementById("seç");
			liste.options.add(secenek);
			secenek.text=erkek[i];
			secenek.value=erkek[i+1];
		}
	
	}
	else if(uruntipi=="K"){
	for(i=0;i<kadin.length;i=i+2){
			secenek=document.createElement("option");
			liste=document.getElementById("seç");
			liste.options.add(secenek);
			secenek.text=kadin[i];
			secenek.value=kadin[i+1];
		}
	}

}
	function hesapla(){
		liste=document.getElementById("seç");
		urunsecimi=liste[liste.selectedIndex].value;
		console.log(urunsecimi);
		liste=document.getElementById("adet");
		urunadet=liste[liste.selectedIndex].value;
		console.log(urunadet);
		liste=document.getElementById("taksit");
		uruntaksit=liste[liste.selectedIndex].value;
		console.log(uruntaksit);
		aratop=urunsecimi*urunadet;
		if(uruntaksit==3){
		aratop=aratop*0.01 +  aratop;
		}
		else if(uruntaksit==6){
		aratop=aratop*0.05+  aratop;
		}
		else if(uruntaksit==9){
		aratop=aratop*0.15+  aratop;
		}
	else	if(uruntaksit==12){
		aratop=aratop*0.2+  aratop;
		} 
		document.getElementById("txtaraplam" ).value=aratop;
		document.getElementById("birim" ).value=urunsecimi;
		if(aratop<100){
			document.getElementById("txtKargo").value=kargotutari;
		odenecektutar=aratop+kargotutari;}
		else{
			document.getElementById("txtKargo").value=0;
			odenecektutar=aratop;
		}
			document.getElementById("sonuc").innerHTML="ÖDEMENİZ GEREKEN TOPLAM TUTAR:"+ odenecektutar;
	}
	var a=document.querySelector('#id');


