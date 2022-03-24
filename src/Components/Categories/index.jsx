import { Button, ButtonGroup } from 'reactstrap'

const FilterbyCategorie = () => {

    return (
        <ButtonGroup className='d-flex flex-column'>
            <Button className='bg-primary mb-1'>
                Alimento
            </Button>
            <Button className='bg-primary mb-1'>
                Bebidas
            </Button>
            <Button className='bg-primary mb-1'>
                Electronicos
            </Button>
            <Button className='bg-primary'>
                Rubber Ducks
            </Button>
        </ButtonGroup>
    )
}



export default FilterbyCategorie