import ProductCard from "../components/ProductCard"

export default function Shop(){
    return(<>
    
    <section class="shopHero" >
    </section>

    <section id="product1" class="section-p1" >
  
        <div class="pro-container">

            <ProductCard/>
  
        </div>
  
      </section>

      <section id="pagination" class="section-p1" >
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
      </section>  

    </>)
}