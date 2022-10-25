import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'

export const formatBigNumber = (number?: BigNumber, displayDecimals = 18, decimals = 18) => {
  if (!number) {
    return
  }

  const remainder = number.mod(BigNumber.from(10).pow(decimals - displayDecimals))
  return formatUnits(number.sub(remainder), decimals)
}

export const foramtAddress = (address?: string) => {
  if (!address) {
    return
  }

  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`
}
