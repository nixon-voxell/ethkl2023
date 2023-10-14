import { Container } from "@mui/material"
import PageTitle from "@/components/Paging/PageTitle"

export default function StorePage () {
    return (
        <>
            <Container maxWidth="lg" sx={{marginTop: 3}}>
                <PageTitle title='My Profile' />
            </Container>
        </>
    )
}