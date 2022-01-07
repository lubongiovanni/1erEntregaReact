//Acá va la card

const Item = ({item}) => {
    return (
        <div class="pic {item.clase}">
            <img src="{ item.imagen }" alt="${ item.titulo }"> </img>
            <h6>{item.stock}</h6>
        </div>
    )
}

export default Item;