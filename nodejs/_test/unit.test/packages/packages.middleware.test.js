const {
  validatePackageId,
  validatePackageCreate,
  validatePackageUpdate,
} = require('../../../src/packages/middleware/packages.validations');
const { dataSinglePackages } = require('../../../examples/packages/packages.example');

describe("Api packages", () => {
  describe("GET Param", () => {
    it("invalid param id", async () => {
      const req = {
        params: {
          id: true,
        },
      };
      const validate = await validatePackageId(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid param id", async () => {
      const req = {
        params: {
          id: "1234",
        },
      };
      const validate = await validatePackageId(req);
      expect(validate.isEmpty()).toEqual(true);
    });
  });

  describe("POST Param", () => {
    it("valid body", async () => {
      const req = {
        body: dataSinglePackages,
      };
      const validate = await validatePackageCreate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
  });

  describe("PATCH Param", () => {
    it("invalid param id", async () => {
      const req = {
        params: {
          id: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid param id", async () => {
      const req = {
        params: {
          id: "1234",
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_id: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_id: dataSinglePackages.transaction_id,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body customer_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_name: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body customer_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_name: dataSinglePackages.customer_name,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body customer_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_code: "abc",
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body customer_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_code: dataSinglePackages.customer_code,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_amount: "abc",
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_amount: dataSinglePackages.transaction_amount,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_discount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_discount: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_discount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_discount: dataSinglePackages.transaction_discount,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_additional_field", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_additional_field: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_additional_field", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_additional_field: dataSinglePackages.transaction_additional_field,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_payment_type", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_payment_type: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_payment_type", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_payment_type: dataSinglePackages.transaction_payment_type,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_state", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_state: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_state", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_state: dataSinglePackages.transaction_state,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_code: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_code: dataSinglePackages.transaction_code,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_order", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_order: "abc",
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_order", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_order: dataSinglePackages.transaction_order,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body location_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          location_id: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body location_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          location_id: dataSinglePackages.location_id,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body organization_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          organization_id: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body organization_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          organization_id: dataSinglePackages.organization_id,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body created_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          created_at: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body created_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          created_at: dataSinglePackages.created_at,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body updated_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          updated_at: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body updated_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          updated_at: dataSinglePackages.updated_at,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_payment_type_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_payment_type_name: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_payment_type_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_payment_type_name: dataSinglePackages.transaction_payment_type_name,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_cash_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_cash_amount: "abc",
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_cash_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_cash_amount: dataSinglePackages.transaction_cash_amount,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body transaction_cash_change", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_cash_change: "abc",
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body transaction_cash_change", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          transaction_cash_change: dataSinglePackages.transaction_cash_change,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body customer_attribute.Nama_Sales", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_attribute: {
            Nama_Sales: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body customer_attribute.Nama_Sales", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_attribute: {
            Nama_Sales: dataSinglePackages.customer_attribute.Nama_Sales,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body customer_attribute.TOP", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_attribute: {
            TOP: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body customer_attribute.TOP", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_attribute: {
            TOP: dataSinglePackages.customer_attribute.TOP,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body customer_attribute.Jenis_Pelanggan", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_attribute: {
            Jenis_Pelanggan: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body customer_attribute.Jenis_Pelanggan", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          customer_attribute: {
            Jenis_Pelanggan: dataSinglePackages.customer_attribute.Jenis_Pelanggan,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_id: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_id: dataSinglePackages.connote.connote_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_number", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_number: "abc",
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_number", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_number: dataSinglePackages.connote.connote_number,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_service", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_service: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_service", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_service: dataSinglePackages.connote.connote_service,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_service_price", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_service_price: "abc",
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_service_price", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_service_price: dataSinglePackages.connote.connote_service_price,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_amount: "abc",
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_amount: dataSinglePackages.connote.connote_amount,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_code: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_code: dataSinglePackages.connote.connote_code,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_booking_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_booking_code: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_booking_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_booking_code: dataSinglePackages.connote.connote_booking_code,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_order", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_order: "abc",
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_order", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_order: dataSinglePackages.connote.connote_order,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_state", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_state: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_state", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_state: dataSinglePackages.connote.connote_state,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_state_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_state_id: "abc",
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_state_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_state_id: dataSinglePackages.connote.connote_state_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.zone_code_from", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            zone_code_from: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.zone_code_from", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            zone_code_from: dataSinglePackages.connote.zone_code_from,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.zone_code_to", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            zone_code_to: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.zone_code_to", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            zone_code_to: dataSinglePackages.connote.zone_code_to,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.surcharge_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            surcharge_amount: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.surcharge_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            surcharge_amount: dataSinglePackages.connote.surcharge_amount,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.transaction_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            transaction_id: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.transaction_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            transaction_id: dataSinglePackages.connote.transaction_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.actual_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            actual_weight: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.actual_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            actual_weight: dataSinglePackages.connote.actual_weight,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.volume_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            volume_weight: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.volume_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            volume_weight: dataSinglePackages.connote.volume_weight,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.chargeable_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            chargeable_weight: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.chargeable_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            chargeable_weight: dataSinglePackages.connote.chargeable_weight,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.created_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            created_at: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.created_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            created_at: dataSinglePackages.connote.created_at,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.updated_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            updated_at: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.updated_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            updated_at: dataSinglePackages.connote.updated_at,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.organization_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            organization_id: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.organization_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            organization_id: dataSinglePackages.connote.organization_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.location_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            location_id: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.location_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            location_id: dataSinglePackages.connote.location_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_total_package", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_total_package: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_total_package", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_total_package: dataSinglePackages.connote.connote_total_package,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_surcharge_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_surcharge_amount: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_surcharge_amount", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_surcharge_amount: dataSinglePackages.connote.connote_surcharge_amount,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.connote_sla_day", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_sla_day: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.connote_sla_day", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            connote_sla_day: dataSinglePackages.connote.connote_sla_day,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.location_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            location_name: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.location_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            location_name: dataSinglePackages.connote.location_name,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.location_type", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            location_type: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.location_type", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            location_type: dataSinglePackages.connote.location_type,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.source_tariff_db", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            source_tariff_db: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.source_tariff_db", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            source_tariff_db: dataSinglePackages.connote.source_tariff_db,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.id_source_tariff", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            id_source_tariff: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.id_source_tariff", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            id_source_tariff: dataSinglePackages.connote.id_source_tariff,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.pod", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            pod: 1,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.pod", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            pod: dataSinglePackages.connote.pod,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote.history", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            history: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote.history", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote: {
            history: dataSinglePackages.connote.history,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body connote_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote_id: true,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body connote_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          connote_id: dataSinglePackages.connote_id,
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.customer_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_name: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.customer_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_name: dataSinglePackages.origin_data.customer_name,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.customer_address", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_address: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.customer_address", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_address: dataSinglePackages.origin_data.customer_address,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.customer_email", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_email: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.customer_email", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_email: dataSinglePackages.origin_data.customer_email,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.customer_phone", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_phone: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.customer_phone", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_phone: dataSinglePackages.origin_data.customer_phone,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.customer_address_detail", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_address_detail: 1,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.customer_address_detail", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_address_detail: dataSinglePackages.origin_data.customer_address_detail,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.customer_zip_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_zip_code: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.customer_zip_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            customer_zip_code: dataSinglePackages.origin_data.customer_zip_code,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.zone_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            zone_code: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.zone_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            zone_code: dataSinglePackages.origin_data.zone_code,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.organization_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            organization_id: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.organization_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            organization_id: dataSinglePackages.origin_data.organization_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body origin_data.location_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            location_id: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body origin_data.location_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          origin_data: {
            location_id: dataSinglePackages.origin_data.location_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.customer_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_name: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.customer_name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_name: dataSinglePackages.destination_data.customer_name,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.customer_address", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_address: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.customer_address", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_address: dataSinglePackages.destination_data.customer_address,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.customer_email", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_email: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.customer_email", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_email: dataSinglePackages.destination_data.customer_email,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.customer_phone", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_phone: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.customer_phone", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_phone: dataSinglePackages.destination_data.customer_phone,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.customer_address_detail", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_address_detail: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.customer_address_detail", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_address_detail: dataSinglePackages.destination_data.customer_address_detail,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.customer_zip_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_zip_code: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.customer_zip_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            customer_zip_code: dataSinglePackages.destination_data.customer_zip_code,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.zone_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            zone_code: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.zone_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            zone_code: dataSinglePackages.destination_data.zone_code,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.organization_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            organization_id: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.organization_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            organization_id: dataSinglePackages.destination_data.organization_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body destination_data.location_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            location_id: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body destination_data.location_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          destination_data: {
            location_id: dataSinglePackages.destination_data.location_id,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_length", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_length: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_length", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_length: dataSinglePackages.koli_data[0].koli_length,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].awb_url", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              awb_url: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].awb_url", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              awb_url: dataSinglePackages.koli_data[0].awb_url,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].created_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              created_at: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].created_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              created_at: dataSinglePackages.koli_data[0].created_at,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_chargeable_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_chargeable_weight: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_chargeable_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_chargeable_weight: dataSinglePackages.koli_data[0].koli_chargeable_weight,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_width", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_width: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_width", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_width: dataSinglePackages.koli_data[0].koli_width,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_surcharge", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_surcharge: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_surcharge", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_surcharge: dataSinglePackages.koli_data[0].koli_surcharge,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_height", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_height: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_height", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_height: dataSinglePackages.koli_data[0].koli_height,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].updated_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              updated_at: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].updated_at", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              updated_at: dataSinglePackages.koli_data[0].updated_at,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_description", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_description: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_description", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_description: dataSinglePackages.koli_data[0].koli_description,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_formula_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_formula_id: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_formula_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_formula_id: dataSinglePackages.koli_data[0].koli_formula_id,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].connote_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              connote_id: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].connote_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              connote_id: dataSinglePackages.koli_data[0].connote_id,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_volume", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_volume: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_volume", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_volume: dataSinglePackages.koli_data[0].koli_volume,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_weight: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_weight", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_weight: dataSinglePackages.koli_data[0].koli_weight,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_id: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_id", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_id: dataSinglePackages.koli_data[0].koli_id,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_custom_field.awb_sicepat", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_custom_field: {
                awb_sicepat: true,
              },
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_custom_field.awb_sicepat", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_custom_field: {
                awb_sicepat: dataSinglePackages.koli_data[0].awb_sicepat,
              },
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_custom_field.harga_barang", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_custom_field: {
                harga_barang: true,
              },
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_custom_field.harga_barang", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_custom_field: {
                harga_barang: dataSinglePackages.koli_data[0].harga_barang,
              },
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body koli_data[0].koli_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_code: true,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body koli_data[0].koli_code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          koli_data: [
            {
              koli_code: dataSinglePackages.koli_data[0].koli_code,
            },
          ],
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body custom_field.catatan_tambahan", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          custom_field: {
            catatan_tambahan: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body custom_field.catatan_tambahan", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          custom_field: {
            catatan_tambahan: dataSinglePackages.custom_field.catatan_tambahan,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body currentLocation.name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          currentLocation: {
            name: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body currentLocation.name", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          currentLocation: {
            name: dataSinglePackages.currentLocation.name,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body currentLocation.code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          currentLocation: {
            code: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body currentLocation.code", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          currentLocation: {
            code: dataSinglePackages.currentLocation.code,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
    it("invalid body currentLocation.type", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          currentLocation: {
            type: true,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(false);
    });
    it("valid body currentLocation.type", async () => {
      const req = {
        params: {
          id: "1234",
        },
        body: {
          currentLocation: {
            type: dataSinglePackages.currentLocation.type,
          },
        },
      };
      const validate = await validatePackageUpdate(req);
      expect(validate.isEmpty()).toEqual(true);
    });
  });
});