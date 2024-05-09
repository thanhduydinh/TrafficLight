import Button from '@/components/ui/Button';

const PaginationItem = (props: {
  page?: number;
  onClick: (pageNumber: number) => void;
  keyProp: string;
  content: string;
  isDisabled?: boolean;
  isActive?: boolean | false;
}) => {
  return (
    <li className='inline mx-0 my-5' key={props.keyProp}>
      <Button
        variant={props.isActive ? 'primary' : 'outlined'}
        className='px-4 py-2 mx-1 border-d-300'
        onClick={() => props.onClick(props.page || 0)}
        disabled={props.isDisabled}
      >
        {props.content}
      </Button>
    </li>
  );
};

// Subcomponent
const Ellipsis = (props: {
  page?: number;
  onClick: (pageNumber: number) => void;
  keyProp: string;
  content: string;
  isDisabled?: boolean;
  isActive?: boolean | false;
}) => {
  return (
    <li className='inline mx-0 my-5' key={props.keyProp}>
      <Button
        variant={props.isActive ? 'primary' : 'outlined'}
        className='px-4 py-2 mx-1 border-none'
        onClick={() => props.onClick(props.page || 0)}
        disabled={props.isDisabled}
      >
        {props.content}
      </Button>
    </li>
  );3
};

PaginationItem.Ellipsis = Ellipsis;
export default PaginationItem;
