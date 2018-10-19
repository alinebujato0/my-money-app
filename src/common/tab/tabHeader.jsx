import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'
import If from '../operator/if'

class TabHeader extends Component {
  render() {

    const {
      target,
      selectTab,
      icon,
      label
    } = this.props
    
    const selected = this.props.tab.selected === target
    const visible = this.props.tab.visible[target]

    return (
      <If test={visible}>
        <li className={ selected ? 'active' : '' }>
          <a href='javascript:;' 
          data-toggle='tab' 
          onClick={() => selectTab(target)} 
          data-target={target}>
          <i className={`fa fa-${icon}`}></i> {label}
          </a>
        </li>
      </If>
    )
  }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)