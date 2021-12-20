const styles = {
main: {
    maxHeight: '50vh',
    
    
},
mainContent: {
    display: 'flex',
    pb: '20px',
    borderBottom: '1px solid white',
},
punkHighlight: {
    flex: 0.25,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',

},
punkContainer: {
    borderRadius: '20px',
    overflow: 'hidden',
    display: 'flex',
    mr: '20px',
},

punkDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '0.75'
},

selectedPunk: {
    objectFit: 'contain',
    maxWidth: 'min(30vw, 40vh)',
    maxHeight: '30vw'
},
title: {
    fontSize: '96px',
    fontWeight: '800',
},
owner: {
    display: 'flex',
    margin: '10px 0',
    height: '50px',
},

ownerImageContainer: {
    height: '50px',
    width: '50px',
    borderRadius: '50px',
    overflow: 'hidden',
    objectFit: 'contain',

    Image: {
        height: '100%',
        width: '100%',
    }

},
ownerDetails: {
display: 'flex',
alignItems: 'center',
},
ownerAndHandler: {
    flex: '1',
},
ownerHandle: {
    color: '#00ebfe',
},


itemNumber: {
    color: '#a1a5b0',
    fontSize:'72px',
    alignSelf: 'center',
}
}


export default styles;