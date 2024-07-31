import { formatardinheiro } from "../helpers"

export default function ResumeProduto({produto}) {
    //console.log(produto)
  return (
   <div className="pb-4 shadow space-y-1 p-4 bg-white">
      <div className="border-b-2">
        <div className="text-sm flex">
          <p className="w-3/4"><span className="font-semibold">COD</span> ................................</p>
          <p className="text-end ">0000-{produto.id}</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Produto</p>
          <p>{produto.nome}</p>
        </div>
        <div className="text-sm flex justify-between">
          <p className="font-semibold">Pre&ccedil;o</p>
          <p className="text-end ">{formatardinheiro(produto.preco)}</p>
        </div>
        <div className="text-sm flex justify-between">
          <p className="font-semibold">QDT</p>
          <p className="text-end ">{produto.cantidade}</p>
        </div>
      </div>
      <div className="text-sm flex justify-between">
          <p className="font-semibold">Sub Total</p>
          <p className="text-end">{formatardinheiro(produto.preco*produto.cantidade)}</p>
      </div>

      <div className="flex justify-between gap-2 p-2 bg-slate-200 rounded-md">
        <button
          type="button"
          className="text-sky-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button
          type="button"
          className=" text-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      
    </div>
  )
}
