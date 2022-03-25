import { Button, ButtonGroup } from 'reactstrap'

const FilterbyCategorie = props => {

    return (
        <ButtonGroup className='d-flex flex-column'>
            <h3>Categorias</h3>
            <Button name='category' onClick value='alimento' className='bg-primary mb-1'>
                Alimento
            </Button>
            <Button name='category' onClick value='bebidas' className='bg-primary mb-1'>
                Bebidas
            </Button>
            <Button name='category' onClick value='electronicos' className='bg-primary mb-1'>
                Electronicos
            </Button>
            <Button name='category' onClick value='rubberDuck' className='bg-primary'>
                Rubber Ducks
            </Button>
        </ButtonGroup>
    )
}



export default FilterbyCategorie