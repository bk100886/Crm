import Layout from '../components/Layout'
import RecoverForm from '../components/Recover/RecoverForm'
import {Grid} from 'semantic-ui-react'
const RecoverPage = () => (
  <Layout title="Восстановление доступа">
    <Grid textAlign='center'  verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <RecoverForm/>
      </Grid.Column>
    </Grid>
  </Layout>
)

export default RecoverPage
