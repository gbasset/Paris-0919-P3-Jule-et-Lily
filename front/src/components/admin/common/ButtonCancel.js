import React from 'react'; export default (props) => {
  return (
    <>
      <button type="button" onClick={props.onClick} className='btn btn-outline-m-2' style={{ border: `solid 2px ${props.color}`, color: props.color }}> Annuler</button>
    </>
  );
}
