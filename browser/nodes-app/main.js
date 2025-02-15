const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη','Παιμπτή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαίου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτομβρίου', 'Δεκεμβρίου']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function(){

    this.setInterval(printGRDate, 1000)
    

    this.document.querySelector('#addNoteBtn').addEventListener('click',
    function(){
        onInsertHadler({key: count + 1, note: document.querySelector('#inputNote').value.trim(), softDeleted: false})
    })

    this.document.querySelector('#addNoteBtn').addEventListener('keyup',
        function(e){

            if(e.key === 'Enter'){
                onInsertHadler({key: count + 1, note: e.target.value.trim() , softDeleted: false})
            }
            
        })

})