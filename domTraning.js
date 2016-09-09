/* TP1

<div id="divTP1">
    Le <strong>World Wide Web Consortium</strong>, abrégé par le sigle <strong>W3C</strong>, est un
    <a href="http://fr.wikipedia.org/wiki/Organisme_de_normalisation" title="Organisme de normalisation">organisme de standardisation</a> à but non-lucratif chargé de promouvoir la compatibilité des technologies du <a href="http://fr.wikipedia.org/wiki/World_Wide_Web" title="World Wide Web">World Wide Web</a>.
</div>

*/

// Main div
var divTP1 = document.createElement('div');
divTP1.id = 'divTP1';

// Text nodes
var textNodes = [
    document.createTextNode("Le "), //O
    document.createTextNode("World Wide Web Consortium"), //1
    document.createTextNode(", abrégé par le sigle "), //2
    document.createTextNode("W3C"), //3
    document.createTextNode(" est un "), //4
    document.createTextNode("organisme de standardisation"), //5
    document.createTextNode(" à but non-lucratif chargé de promouvoir la compatibilité des technologies du "),//6
    document.createTextNode("World Wide Web"), //7
    document.createTextNode(".") //8
];

var strong0 = document.createElement('strong');
strong0.appendChild(textNodes[1]);

var strong1 = document.createElement('strong');
strong1.appendChild(textNodes[3]);

var link0 = document.createElement('a');
link0.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
link0.title = "Organisme de normalisation";
link0.appendChild(textNodes[5]);

var link1 = document.createElement('a');
link1.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
link1.title = "World Wide Web";
link1.appendChild(textNodes[7]);

divTP1.appendChild(textNodes[0]);
divTP1.appendChild(strong0);
divTP1.appendChild(textNodes[2]);
divTP1.appendChild(strong1);
divTP1.appendChild(textNodes[4]);
divTP1.appendChild(link0);
divTP1.appendChild(textNodes[6]);
divTP1.appendChild(link1);
divTP1.appendChild(textNodes[8]);

document.body.appendChild(divTP1);


/* TP 2

<div id="divTP2">
    <p>Langages basés sur ECMAScript :</p>

    <ul>
        <li>JavaScript</li>
        <li>JScript</li>
        <li>ActionScript</li>
        <li>EX4</li>
    </ul>
</div>

*/

var divTP2 = document.createElement('div');
divTP2.id = 'divTP2';

var textNodesTP2 = [
    document.createTextNode("Langages basés sur ECMAScript :"), //O
    document.createTextNode("JavaScript"), //1
    document.createTextNode("JScript"), //2
    document.createTextNode("ActionScript"), //3
    document.createTextNode("EX4") //4
];

var pTp2 = document.createElement('p');
pTp2.appendChild(textNodesTP2[0]);

var ulTp2 = document.createElement('ul');
for(var i = 1; i < 5; i++)
{
    var liTp2 = document.createElement('li');
    liTp2.appendChild(textNodesTP2[i]);
    ulTp2.appendChild(liTp2);
}

divTP2.appendChild(pTp2);
divTP2.appendChild(ulTp2);

document.body.appendChild(divTP2);



/* TP3

<div id="divTP3">
    <form enctype="multipart/form-data" method="post" action="upload.php">
        <fieldset>
            <legend>Uploader une image</legend>
			
            <div style="text-align: center">
                <label for="inputUpload">Image à uploader :</label>
                <input type="file" name="inputUpload" id="inputUpload" />
                <br /><br />
                <input type="submit" value="Envoyer" />		
            </div>
        </fieldset>	
    </form>
</div>

*/

var divTP3 = document.createElement('divTP3');
divTP3.id = 'divTP3';

// Structure du formulaire
var form = document.createElement('form');
var fieldset = document.createElement('fieldset');
var legend = document.createElement('legend'),
    legendText = document.createTextNode('Uploader une image');
var center = document.createElement('div');

form.action = 'upload.php';
form.enctype = 'multipart/form-data';
form.method = 'post';

center.setAttribute('style', 'text-align: center');

legend.appendChild(legendText);

fieldset.appendChild(legend);
fieldset.appendChild(center);

form.appendChild(fieldset);

// Création des champs
var label = document.createElement('label'),
    labelText = document.createTextNode('Image à uploader :');
var input = document.createElement('input');
var br = document.createElement('br');
var submit = document.createElement('input');

input.type = 'file';
input.id = 'inputUpload';
input.name = input.id;

submit.type = 'submit';
submit.value = 'Envoyer';

label.htmlFor = 'inputUpload';
label.appendChild(labelText);

center.appendChild(label);
center.appendChild(input);
center.appendChild(br);
center.appendChild(br.cloneNode(false)); // On clone, pour mettre un deuxième <br />
center.appendChild(submit);

// Insertion du formulaire
divTP3.appendChild(form);

// Insertion dans la page
document.body.appendChild(divTP3);