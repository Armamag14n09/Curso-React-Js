

const Select = ( {option}) => {

    return(
        <select>
            option.map((opt) => <option key={opt.value} value={opt.value}>{option.tex} </option>)
        </select>
    )

}

export default Select