import React, {Component} from 'react'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './ContactData.module.css'

import axios from '../../../axios-orders'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postal: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        
		this.setState({loading: true})
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price, // you should be calculating the total price on the server
			customer: {
				name: 'max',
				address: {
					street: '12345 street',
					zipcode: '1111'
				},
				email: 'asdf@asdf.com'
			},
			method: 'fastest'
		}
		axios.post('/orders.json', order)
			.then(response => {
                this.setState({loading: false})
                this.props.history.push('/')
			})
			.catch(error => {
				this.setState({loading: false})
			})
    }

    render () {
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your name"/>
                <input className={styles.Input} type="email" name="email" placeholder="Your email"/>
                <input className={styles.Input} type="text" name="street" placeholder="Your street"/>
                <input className={styles.Input} type="text" name="postal" placeholder="Your postal code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        )

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={styles.ContactData}>
                <h4>Enter your contact info</h4>
                {form}
            </div>
        )
    }
}

export default ContactData