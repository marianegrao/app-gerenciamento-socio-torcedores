import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { useState, useEffect } from "react";
import { Money } from "phosphor-react";
import "./styles.css";
import { listInvoices } from "../../services/api";
import { useGlobalContext } from "../../hooks/useGlobalContext";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Nunito",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "5px",
    letterSpacing: "0.005em",
    color: "#747488",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function GetStatus({ invoice }) {
  let className = "";
  let status = "";

  if (invoice.status === "paid") {
    className = "status_table status--true";
    status = "Paga";
  } else if (invoice.status === "overdue") {
    className = "status_table status--false";
    status = "Vencida";
  } else {
    className = "status_table status--pending";
    status = "Pendente";
  }

  return <div className={className}>{status}</div>;
}

export default function TableInvoices() {
  const { invoices, setInvoices, handleShowModalPayInvoice, setCurrentInvoice, refreshPage } =
    useGlobalContext();

  async function handleListInvoices() {
    const response = await listInvoices();
    if (!response.error) {
      setInvoices(response.data);
    }
  }

  function handleShowModalPayInvoiceById(invoice) {
    handleShowModalPayInvoice();

    setCurrentInvoice(invoice);
  }

  useEffect(() => {
    handleListInvoices();
  }, [refreshPage]);

  return (
    <>
      <TableContainer className="table" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell className="header-title_table" align="center">
                Clube
              </StyledTableCell>
              <StyledTableCell className="header-title_table" align="center">
                ID Fatura
              </StyledTableCell>
              <StyledTableCell className="header-title_table" align="center">
                Data de venc
              </StyledTableCell>
              <StyledTableCell className="header-title_table" align="center">
                Valor
              </StyledTableCell>
              <StyledTableCell className="header-title_table" align="center">
                Status
              </StyledTableCell>
              <StyledTableCell className="header-title_table" align="center">
                Pagar fatura
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices &&
              invoices.map((invoice) => (
                <StyledTableRow key={invoice.id} className="row_table">
                  <StyledTableCell align="center">{invoice.club_name}</StyledTableCell>
                  <StyledTableCell align="center">{invoice.id}</StyledTableCell>
                  <StyledTableCell align="center">{invoice.due_date}</StyledTableCell>
                  <StyledTableCell align="center">{invoice.monthly_payment}</StyledTableCell>
                  <StyledTableCell align="center">
                    <GetStatus align="center" invoice={invoice} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      type="button"
                      onClick={() => handleShowModalPayInvoiceById(invoice)}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      <div className="button-pay-invoice">
                        <Money size={32} weight="fill" />
                        <strong>Pagar fatura</strong>
                      </div>
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        {invoices.length === 0 && (
          <div className="empty__search">
            <p className="search__title">Você não possui faturas</p>
          </div>
        )}
      </TableContainer>
    </>
  );
}
