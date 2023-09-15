import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const alert = ({children, onClose}: Props) => {
  return (
    <div className="alert alert-primary d-flex justify-content-between">
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default alert