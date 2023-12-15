const PrimaryButton = (props) => {
  return (
    <button className="bg-primary py-2 px-4 mt-2 rounded-lg font-medium text-on-primary">
      {props.text}
    </button>
  )
}

export default PrimaryButton