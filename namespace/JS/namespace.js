
var BOOS0010 = {
    init: function () {
        let d = document.createElement("div");
        d.className="box";
        d.textContent="BOOS0010";
        document.getElementById("boxes").appendChild(d);
        
        d.addEventListener("click",clicked);
        d.addEventListener("mouseover",hover);
        d.addEventListener("mouseout",release);
        
        function clicked(ev){
            d.style.borderColor="red";
            d.style.backgroundColor="blue";
            d.style.color="red";
        }
        
        function hover(ev){
            ev.currentTarget.classList.toggle("highlight");
        }
        
        function release(ev){
            ev.currentTarget.classList.toggle("highlight");
        }
    }
};
