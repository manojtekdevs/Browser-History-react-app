import './index.css'

const HistoryItem = props => {
  const {searchHistoryDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchHistoryDetails

  const onClickDeleteIcon = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-list-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="domainLogo-title-domainUrl-deleteIcon-container">
        <div className="domainLogo-title-domainUrl-container">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <div className="title-domainUrl">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="button"
            onClick={onClickDeleteIcon}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
