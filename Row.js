/* eslint-disable react/prop-types */
import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

const Row = ({ name, phone, onSelectContact }) => (
  <TouchableOpacity style={styles.row} onPress={() => onSelectContact(name, phone)}>
    <Text>{name}</Text>
    <Text>{phone}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  row: { padding: 20 }
})

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string
  // onSelectContact: PropTypes.function
}

export default Row
