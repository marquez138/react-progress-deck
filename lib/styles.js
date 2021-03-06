'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var getStyles = function getStyles(props) {
  var theme = arguments.length <= 1 || arguments[1] === undefined ? 'materialize' : arguments[1];

  return {
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: props.size + 'px',
      background: '#FFF',
      boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
      color: '#272727',
      borderRadius: '2px'
    },
    imgContainer: {
      width: props.size + 'px',
      height: props.imageUrl ? '160px' : 0,
      overflow: 'hidden'
    },
    img: {
      width: '100%'
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '12px',
      padding: '20px',
      fontWeight: 300,
      lineHeight: '15px'
    },

    thumbnailContainer: {
      position: 'relative',
      height: '46px',
      width: '46px',
      overflow: 'hidden',
      float: 'left',
      marginRight: '10px'
    },
    thumbnail: {
      width: '100%'
    },
    detail: {
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      lineHeight: '25px',
      fontSize: '18px',
      fontWeight: 300
    },

    percentageText: {
      // float: 'right',
      fontSize: '38px',
      color: props.progressForegroundColor || '#26a69a',
      alignSelf: 'flex-end'
    },

    progress: {
      position: 'relative',
      height: '5px',
      display: 'block',
      width: '100%',
      backgroundColor: props.progressBackgroundColor || '#acece6' },
    determinate: {
      position: 'absolute',
      width: props.percentage * 100 + '%',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: props.progressForegroundColor || '#26a69a'
    }
  };
  //for now only support materialize design styled badge
  var styles = {
    card: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: props.size + 'px',
      position: 'relative',
      overflow: 'hidden',
      margin: '10px',
      background: '#FFF',
      boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
      color: '#272727',
      borderRadius: '2px'
    },
    title: {
      lineHeight: '25px',
      fontSize: '20px',
      fontWeight: 300
    },
    content: {
      fontSize: '12px',
      padding: '20px',
      fontWeight: 300,
      lineHeight: '15px'
    },
    percentageText: {
      float: 'right',
      color: props.progressForegroundColor || '#26a69a'
    },
    imgContainer: {
      width: '100%',
      height: props.imageUrl ? '160px' : 0,
      overflow: 'hidden'
    },
    img: {
      width: '100%'
    },

    thumbnailContainer: {
      position: 'relative',
      height: '46px',
      width: '46px',
      overflow: 'hidden',
      float: 'left',
      marginRight: '10px'
    },
    thumbnail: {
      width: '100%'
    },
    progress: {
      position: 'relative',
      height: '5px',
      display: 'block',
      width: '100%',
      backgroundColor: props.progressBackgroundColor || '#acece6' },
    determinate: {
      position: 'absolute',
      width: props.percentage * 100 + '%',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: props.progressForegroundColor || '#26a69a'
    }
  };
  return styles;
};

exports['default'] = getStyles;
module.exports = exports['default'];
// alignItems:'flex-end'
//'#acece6',
//'#acece6',