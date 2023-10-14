import { Container } from "@mui/material"
import PageTitle from "@/components/Paging/PageTitle"

export default function CollectionPage () {
    return (
        <>
            <Container maxWidth="lg" sx={{marginTop: 3}}>
                <PageTitle title="Collection" />
            </Container>
        </>
    )
}