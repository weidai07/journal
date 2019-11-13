import './bootstrap.css';
import './styles.css';
import { Journal } from './journal.js';

$(document).ready(function(){
  $("#submitButton").click(function(event){
    event.preventDefault();
    var date = $("#date").val();
    var body = $("#body").val();
    var myJournal = new Journal(date, body);
    $("#stats").append(myJournal.numWords() + "<br>");
    $("#stats").append(myJournal.vowelsAndConsonants() + "<br>");
    $("#stats").append(myJournal.getTeaser());
    $("#date").val('');
    $("#body").val('');
    $("#stats").val('');
  });
});
