import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import { useContractRead } from 'wagmi'

import { CDAI } from '../constants'
import { formatBigNumber } from '../helpers'

const useCdaiBalance = (address?: string) => {
  const res = useContractRead({
    addressOrName: CDAI.address,
    contractInterface: CDAI.abi,
    functionName: 'balanceOf',
    args: address,
  })

  return {
    ...res,
    formatted: formatBigNumber(BigNumber.from(res.data || 0), 2) || '0.00',
  }
}

/**
 * Exports
 */

export default useCdaiBalance
