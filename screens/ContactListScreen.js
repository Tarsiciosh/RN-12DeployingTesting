/* eslint-disable react/display-name */
import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import SectionListContacts from '../SectionListContacts'
import { connect } from 'react-redux'

function ContactListScreen ({ route, navigation, contacts }) {
  const [showContacts, setShowContacts] = React.useState(false)

  // let contacts = store.getState().contacts
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Contacts',
      headerRight: () => (
        <Button
          title="Add"
          color='#a41034'
          onPress={ () => navigation.navigate('AddContact') }
        />
      )
    })
  }, [navigation, route])

  const handleSelectContact = (name, phone) => {
    navigation.navigate('ContactDetails', { name, phone }) // doesn't work
  }

  const toggleContacts = () => {
    if (showContacts === false) {
      setShowContacts(true)
    } else {
      setShowContacts(false)
    }
  }

  return (
    <View style={styles.container}>
      <Button title = "toggle" onPress= {toggleContacts} />
      {
        showContacts &&
        <SectionListContacts
          contacts={contacts}
          onSelectContact={ handleSelectContact }
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

ContactListScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  contacts: PropTypes.array
}

// REDUX:
const mapStateToProps = state => ({
  contacts: state.contacts
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListScreen)

/*

//
function ContactListScreen ({ route, navigation, contacts }) {
  // let contacts = store.getState().contacts
  const [showContacts, setShowContacts] = React.useState(false)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Contacts',
      headerRight: () => (
        <Button
          title="Add"
          color='#a41034'
          onPress={ () => navigation.navigate('AddContact') }
        />
      )
    })
  }, [navigation, route])

  const handleSelectContact = (name, phone) => {
    console.log(name, phone)
    navigation.navigate('ContactDetails', { name, phone }) // doesn't work
  }

  const toggleContacts = () => {
    if (showContacts === false) {
      setShowContacts(true)
    } else {
      setShowContacts(false)
    }
  }

  return (
    <View style={styles.container}>
      <Button title = "toggle" onPress={toggleContacts()} />
      <SectionListContacts
        contacts={contacts}
        onSelectContact={ handleSelectContact }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

ContactListScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  contacts: PropTypes.array
}

// REDUX:
const mapStateToProps = state => ({
  contacts: state.contacts
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListScreen)
*/
