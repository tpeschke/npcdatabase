import React from 'react';
import * as jsPDF from 'jspdf'

class WarriorPDF extends React.Component {
    constructor(props){
        super(props);
        this.pdfToHTML=this.pdfToHTML.bind(this);
    }

    pdfToHTML(){
        
        var { charactername, honor, fame, charlevel } = this.props.NPC

        var specialElementHandlers = {
            '#myId': function(element, renderer){
                return true;
            },
        };

        let doc = new jsPDF();

        function getBase64Image(img) {
            var canvas = document.createElement('canvas')
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d")
            ctx.drawImage(img, 0, 0);
            var dataUrl = canvas.toDataURL("image/jpeg")
            return dataUrl.replace(/^data:image\/(png|jpg);base64,/,"");
        }

        var img = new Image()
        img.onload = function() {
            var dataURI = getBase64Image(img)
            return dataURI
        }

        img.src = "./Info.jpg"
        doc.addImage(img.onload(),'JPEG',15,40,180,100)
        // doc.text(20, 20, 'Hello world.');
        // doc.addPage('a4','p');
        // var source = document.getElementById('myId');
        // doc.fromHTML(
        //     source, 15, 15, {
        //         'elementHandlers': specialElementHandlers
        //     }
        // );
        // doc.addPage('a4','l');
        // doc.fromHTML(
        //     source, 15, 15, {
        //         'elementHandlers': specialElementHandlers
        //     }
        // );
        doc.save('Test.pdf');


    }

    render() {
        return (
            <div>
                <button onClick={this.pdfToHTML}>Download PDF</button>
            </div>
        );
    }
}

export default WarriorPDF;