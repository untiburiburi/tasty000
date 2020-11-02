window.onload = function(){

    var now = null,
          max = 710,
          input_area = document.getElementById("texthttps://kobechs.train.tracks.run/editor/1.0/book#main-file1_area"),
          output_area = document.getElementById("text_length");
  
    input_area.onkeyup = function(){
      now = ( max - input_area.value.length );
      output_area.innerText = now;
      output_area.className = ( now < 0 ) ? "out" : "";
    }
  
  }
  