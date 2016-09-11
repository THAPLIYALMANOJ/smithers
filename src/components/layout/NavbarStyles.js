export default ({theme, lighten, color}) => ({
  headerStyles: {
    height: theme.headerOffset,
    WebkitAppRegion: 'drag',
    cursor: 'grab',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  inputWrapperStyles: {
    width: '100%',
    height: theme.inputHeight + theme.headerOffset,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99999,
    paddingTop: (theme.headerOffset - 10),
    backgroundColor: theme.barBackgroundColor
  },
  inputIconStyles: {
    position: 'absolute',
    top: '50%',
    left: 20,
    transform: 'translate(0, -50%)',
    fontSize: '2em',
    color: lighten(color('grey', 500), 0.5),
    marginTop: Math.max(0, (theme.headerOffset - 10) / 2)
  },
  inputStyles: {
    width: '100%',
    height: '100%',
    border: 0,
    margin: 0,
    padding: `0 0 0 ${(theme.padding + (theme.cardSpace * 2))}px`,
    fontSize: 20,
    color: 'white',
    backgroundColor: theme.barBackgroundColor,
    borderBottom: `1px solid ${color(theme.primaryColor, 800)}`,
    ':active': {
      outline: 'none'
    },
    ':focus': {
      outline: 'none'
    },
    '::-webkit-input-placeholder': {
      color: 'rgba(255, 255, 255, 0.87)'
    }
  },
  variables: {
    zIndex: 1
  },
  variablesWrapper: {
    display: 'inline-flex'
  },
  positionSuggestions: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: theme.inputHeight + theme.headerOffset - 8
  },
  suggestions: {
    maxHeight: 'calc(100vh / 2)',
    overflowY: 'scroll',
    margin: '0.3rem 10px 1rem 10px',
    width: '100%'
  },
  suggestion: {
    cursor: 'default'
  },
  activeSuggestion: {
    boxShadow: `inset 0 51px ${color('grey', 100)}`
  },
  argument: {
    backgroundColor: color(theme.primaryColor),
    color: 'white',
    padding: 5,
    borderRadius: 3,
    ...theme.shadow1
  },
  optional: {
    backgroundColor: color(theme.primaryColor, 100),
    padding: 5,
    borderRadius: 3,
    ...theme.shadow1
  }
})
