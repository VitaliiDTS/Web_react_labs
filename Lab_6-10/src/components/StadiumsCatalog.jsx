import {Container} from '@mui/material';

import Stadiums from "./Stadiums.jsx";

function StadiumsCatalog() {

    return(
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                marginTop: 10,
                marginBottom:20
            }}
        >

            <Stadiums/>
        </Container>
    )
}

export default StadiumsCatalog;