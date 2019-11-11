//Step 1: Usado na troca
import WantToExchange from '../views/exchange/WantToExchange'
import VehicleSituation from '../views/exchange/VehicleSituation'
import VehicleCondition from '../views/exchange/VehicleCondition'
import VehicleInformation from '../views/exchange/VehicleInformation'
import VehicleEvaluationResult from '../views/exchange/VehicleEvaluationResult'
import AddAnotherVehicle from '../views/exchange/AddAnotherVehicle'

//Step 2: Forma de pagamento
import PaymentMethod from '../views/payment/PaymentMethod'
import DownPayment from '../views/payment/financing/DownPayment'
import CashClientInformation from '../views/payment/cash/ClientInformation'
import FinancingResult from '../views/payment/financing/FinancingResult'
import DownPaymentValue from '../views/payment/financing/DownPaymentValue'
import FinancingClientInformation from '../views/payment/financing/ClientInformation'

//Step 3: Pedido
import OrderSummary from '../views/order/OrderSummary'
import OrderConfirmation from '../views/order/OrderConfirmation'

export const routes = [
	{
		path: '/',
		component: WantToExchange,
	},
	{
		path: '/exchange/vehicle-information',
		component: VehicleInformation,
	},
	{
		path: '/exchange/vehicle-condition',
		component: VehicleCondition,
	},
	{
		path: '/exchange/vehicle-situation',
		component: VehicleSituation,
	},
	{
		path: '/exchange/vehicle-evaluation-result',
		component: VehicleEvaluationResult,
	},
	{
		path: '/exchange/add-another-vehicle',
		component: AddAnotherVehicle,
	},
	{
		path: '/payment/method',
		component: PaymentMethod,
	},
	{
		path: '/payment/cash/client-information',
		component: CashClientInformation,
	},
	{
		path: '/payment/financing/client-information',
		component: FinancingClientInformation,
	},
	{
		path: '/payment/financing/down-payment',
		component: DownPayment,
	},
	{
		path: '/payment/financing/down-payment-value',
		component: DownPaymentValue,
	},
	{
		path: '/payment/financing/result',
		component: FinancingResult,
	},
	{
		path: '/order/confirmation',
		component: OrderConfirmation,
	},
	{
		path: '/order/summary',
		component: OrderSummary,
	},
]