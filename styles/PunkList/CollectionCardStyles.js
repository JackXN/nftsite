const styles = {
collectionCard:  {
    color: 'white',
    backgroundColor: '#19181C',
    borderRadius: '20px',
    overflow: 'hidden',
    height: '500px',
    width: '300px',
    mr: '30px',
    
    flexWrap: 'wrap',
    margin: '10px',

    Image: {
        height: '23px',
        width: '15px'
    }
},
priceContainer: {
    display: 'flex',
    alignItems: 'center',
    mt: '10px',
    objectFit: 'contain',
},
details: {
    padding: '20px',

},

name: {
fontSize: '20px',
fontWeight: '900',
},

id: {
    color: '#a1a5b0',
    fontSize: '18px',
    fontWeight: '500',
},

price: {
    ml: '5px',
    fontWeight: '600'
}


}

export default styles;