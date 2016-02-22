/**
 * Created by yili on 2/22/16.
 */

import React,{Component, PropTypes } from 'react'
import {bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as changeActions from '../actions'
import Counter from '../components/Counter'



class App extends Component {
    render(){
        const {todos,actions}= this.props
        return (
             <Counter
              value={todos}
              onIncrement={actions.inc}
              onDecrement={actions.dec}
             />

        )
    }
}

App.propTypes ={
    todos:PropTypes.number.isRequired,
    actions:PropTypes.object.isRequired
}


function mapStateToProps(state){
    return {
        todos:state
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(changeActions,dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)






