
var BOOS0010 = {
    init: function () {
        let d = document.createElement("div");
        document.getElementById("box");
        d.className="boxes";
        d.textContent="BOOS0010";
        d.appendChild(d);
        
        d.addEventListener("click",clicked);
        d.addEventListener("mouseover",hover);
        d.addEventListener("mouseout",release);
        
        function clicked(ev){
            d.style.borderColor="black";
            d.style.backgroundColor="white";
            
        }
        
        function hover(ev){
            ev.currentTarget.classList.toggle("highlight");
        }
        
        function release(ev){
            ev.currentTarget.classList.toggle("highlight");
        }
    }
}
