import { ReactComponent as EditIcon } from '../../../../assets/edit.svg';
import './Table.css';

export default function Table(props) {
    return (
        <tr className='fill'>
            <td className='cell-align-left'>
                <EditIcon
                    className='icn-edit'
                    onClick={() => props.handleEdit(props.id)}
                />
                {props.token}
            </td>
            <td className='cell-align-right'>{props.balance}</td>
        </tr>
    );
}
