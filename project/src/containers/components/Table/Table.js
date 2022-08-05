import { ReactComponent as EditIcon } from '../../../assets/edit.svg';

export default function Table(props) {
    return (
        <tr className='fill'>
            <td key={props.id} className={props.left}>
                <EditIcon
                    className='icn-edit'
                    onClick={() => props.handleEdit(props.id)}
                />
                {props.token}
            </td>
            <td className={props.right}>{props.balance}</td>
        </tr>
    );
}
