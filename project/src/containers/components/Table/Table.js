import { ReactComponent as EditIcon } from '../../../assets/edit.svg';

export default function Table(props) {
    return (
        <tr className='fill'>
            <td key={props.id} className={props.left}>
                {/* <button onClick={() => props.handleEdit(props.id)}> */}
                <EditIcon
                    className='icn-edit'
                    onClick={() => props.handleEdit(props.id)}
                />
                {/* </button> */}
                {props.token}
            </td>
            <td className={props.right}>{props.balance}</td>
        </tr>
    );
}
